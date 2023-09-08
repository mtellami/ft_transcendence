up :
	docker-compose up -d --build

down :
	docker-compose down

ps :
	@docker ps -a && echo
	@docker images && echo
	@docker volume ls && echo
	@docker network ls && echo

clean : down
	docker rmi $$(docker images -q)
