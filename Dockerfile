FROM mattrayner/lamp:latest-1604

RUN mkdir /app; exit 0
WORKDIR /app

COPY . .

CMD ["/run.sh"]
