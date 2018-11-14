angular.module('portainer')
.constant('API_ENDPOINT_AUTH', 'api/auth')
.constant('API_ENDPOINT_DOCKERHUB', 'api/dockerhub')
.constant('API_ENDPOINT_ENDPOINTS', 'api/endpoints')
.constant('API_ENDPOINT_ENDPOINT_GROUPS', 'api/endpoint_groups')
.constant('API_ENDPOINT_MOTD', 'api/motd')
.constant('API_ENDPOINT_PLUGINS', 'api/plugins')
.constant('API_ENDPOINT_REGISTRIES', 'api/registries')
.constant('API_ENDPOINT_RESOURCE_CONTROLS', 'api/resource_controls')
.constant('API_ENDPOINT_SCHEDULES', 'api/schedules')
.constant('API_ENDPOINT_SETTINGS', 'api/settings')
.constant('API_ENDPOINT_STACKS', 'api/stacks')
.constant('API_ENDPOINT_STATUS', 'api/status')
.constant('API_ENDPOINT_USERS', 'api/users')
.constant('API_ENDPOINT_TAGS', 'api/tags')
.constant('API_ENDPOINT_TEAMS', 'api/teams')
.constant('API_ENDPOINT_TEAM_MEMBERSHIPS', 'api/team_memberships')
.constant('API_ENDPOINT_TEMPLATES', 'api/templates')
.constant('API_ENDPOINT_WEBHOOKS', 'api/webhooks')
.constant('DEFAULT_TEMPLATES_URL', 'https://raw.githubusercontent.com/portainer/templates/master/templates.json')
.constant('PAGINATION_MAX_ITEMS', 10)
.constant('APPLICATION_CACHE_VALIDITY', 3600)
.constant('CONSOLE_COMMANDS_LABEL_PREFIX', 'io.portainer.commands.');
