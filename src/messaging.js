(function () {
  const ALLOWED_ORIGINS = [
    window.location.origin,
    'http://localhost:3000',
    'https://staging.zerohomes.io',
    'https://app.zerohomes.io',
    'https://storage.googleapis.com',
  ];

  const message_type_handlers = {
    init_api: () => {
      window.api.setConfig({
        onChange: () => {
          const floorplanObj = window.api.exportFloorplan();
          const floorplanJson = JSON.stringify(floorplanObj);
          window.parent.postMessage({
            message_type: 'change',
            data: floorplanJson,
          }, window.parent.location.origin);
        },
      });
      window.api.init();
    },
    open_floorplan: (floorplan_json) => window.api.openFloorplan(floorplan_json),
  };

  window.addEventListener('message', ({ data: { message_type, data }, origin }) => {
    if (!ALLOWED_ORIGINS.includes(origin)) {
      throw Error(`Message origin not allowed. Got ${origin}, allowed: ${ALLOWED_ORIGINS.join(', ')}`);
    }
    if (!(message_type in message_type_handlers)) {
      throw Error(`Unknown message type "${message_type}, allowed: ${Object.keys(message_type_handlers).join(', ')}`);
    }
    console.log(`embedded Floorspace app - received message of type '${message_type}'`);
    message_type_handlers[message_type](data);
  });
}());
