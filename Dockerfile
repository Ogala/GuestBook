#FROM golang:alpine AS build
#
#RUN apk add --no-cache git mercurial \
#	&& go get github.com/codegangsta/negroni \
#	&& go get github.com/gorilla/mux \
#	&& go get github.com/xyproto/simpleredis \
#	&& apk del git mercurial
#
#WORKDIR /go/src/app
#
#COPY . .
#
#RUN go get -d -v ./...
#
#RUN go install -v ./...
#
#RUN apk update && \
#    apk add redis 
#EXPOSE 5000 3000
#RUN redis-server --port 6379 --slaveof redis-master 6379
#EXPOSE 5000 3000
#
#CMD ["app"]
FROM alpine

WORKDIR /webapp

RUN wget -O webapp.tar.gz https://github.com/michaeljon/SU_SEGR_5910_18WQ/blob/master/webapp.tar.gz?raw=true && \
    tar --strip-components=1 -zxvf ./webapp.tar.gz && \
    rm ./webapp.tar.gz


ENTRYPOINT [ "./dist/example-webapp-linux" ]
