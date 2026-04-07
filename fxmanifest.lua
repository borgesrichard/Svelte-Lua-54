fx_version 'cerulean'
game 'gta5'

name "svelte-lua"
description "Svelte + Vite + ts"
author "Beta"
version "1.0.0"

lua54 'yes'
use_experimental_fxv2_oal 'yes'

ui_page 'dist/index.html'

shared_scripts {
	'@ox_lib/init.lua',
	'shared/*.lua'
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'server/*.lua'
}

files {
	'dist/index.html',
	'dist/**/*'
}

dependencies {
	'ox_lib'
}