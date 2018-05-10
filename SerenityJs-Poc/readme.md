DEPURANDO EN VS CODE

{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Attach by Process ID",
            "processId": "${command:PickProcess}"
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach",
            "port": 5858
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",
            "stopOnEntry": false,
            "args": [
                "${workspaceRoot}/protractor.conf.js"
            ]
        }
    ]
}

si se quiere depurar un scenario especifico agregamos dentro de los argumentos el escenario
a depurar:


"args": [
"${workspaceRoot}/protractor.conf.js",
"--cucumberOpts.name",
"Log into application with Builder"
]


////////

MAC

Debug -> Add configuration... -> node -> attach
Ejecutamos el comando: which node

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Attach by Process ID",
            "processId": "${command:PickProcess}"
        },
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",
            "stopOnEntry": false,
            "runtimeExecutable":"/usr/local/bin/node",
            "args": ["--cucumberOpts.name",
            "Log into application with Builder"
            ]
        }
    ]
}