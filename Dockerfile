FROM golang:alpine AS build

RUN apk add --no-cache git mercurial \
	&& go get github.com/codegangsta/negroni \
	&& go get github.com/gorilla/mux \
	&& go get github.com/xyproto/simpleredis \
	&& apk del git mercurial

WORKDIR /go/src/app

COPY . .

RUN go get -d -v ./...

RUN go install -v ./...

EXPOSE 5000 3000

CMD ["app"]
