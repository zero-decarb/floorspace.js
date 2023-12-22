(function () {
  const ALLOWED_ORIGINS = [
    window.location.origin,
  ];

  const message_type_handlers = {
    open_floorplan: (floorplan_json) => window.api.openFloorplan(floorplan_json),
  };

  window.addEventListener('message', ({ data: { message_type, data }, origin }) => {
    if (!ALLOWED_ORIGINS.includes(origin)) {
      throw Error(`Message origin not allowed. Got ${origin}, allowed: ${ALLOWED_ORIGINS.join(', ')}`);
    }
    if (!(message_type in message_type_handlers)) {
      throw Error(`Unknown message type "${message_type}, allowed: ${Object.keys(message_type_handlers).join(', ')}`);
    }
    message_type_handlers[message_type](data);
  });
}());
