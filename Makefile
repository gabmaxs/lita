# nome do container onde o banco de testes vai rodar
TESTS_DB_CONTAINER_NAME=lita_test
TESTS_DB_USER=root
TESTS_DB_PASS=root
TESTS_DB_NAME=lita
TESTS_DB_IMAGE=mysql:8
TESTS_DB_LOCAL_PORT=3309
NODE_ENV=test

stop-test-db:
	$(info Removendo o container do banco)
	docker rm -f ${TESTS_DB_CONTAINER_NAME} || true

aplicar-migrations:
	$(info Aplicando migrations no banco configurado nas variáveis de ambiente)
	NODE_ENV=${NODE_ENV} npx sequelize-cli db:migrate

start-test-db: stop-test-db
	$(info Subindo o container do banco)
	docker run --rm -d \
		--name=${TESTS_DB_CONTAINER_NAME} \
		-e MYSQL_ROOT_PASSWORD=${TESTS_DB_PASS} \
		-e MYSQL_DATABASE=${TESTS_DB_NAME} \
		--tmpfs /var/lib/mysql \
		--health-cmd='mysql -u${TESTS_DB_USER} -p${TESTS_DB_PASS} ${TESTS_DB_NAME} --execute "SELECT 1"' \
		--health-interval=5s \
		--health-retries=20 \
		-p ${TESTS_DB_LOCAL_PORT}:3306 \
		${TESTS_DB_IMAGE} \
		--sql-mode=""

	$(info Aguardando o banco estar pronto)
	sh ./scripts/wait-for-test-db.sh