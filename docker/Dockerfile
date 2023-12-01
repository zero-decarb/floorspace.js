FROM --platform=linux/amd64 ubuntu:latest AS floorspacejs-dev

RUN apt-get update && \
    apt-get install -y libappindicator1 fonts-liberation ruby-full python3-pip npm python2

# Something in the NPM installation wants there to be a `python` command in the PATH that
# maps to python2
RUN ln -s `which python2` /usr/local/bin/python

ADD . /app

CMD tail -f /dev/null
