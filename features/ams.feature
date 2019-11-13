Feature: Pruebas en la pagina de Sapling

    Scenario: Logearse en la pagina de sapling
        Given Abrir Sapling
        When Ingresar usuario y contraseña en sapling
        And Cambio la url
        And Recorro la tabla hasta la fila 5 y verifico que el Author Mode sea igual a Raptor
        Then cerrar el navegador

    Scenario: Verificar el access
        Given Abrir Sapling
        When Ingresar usuario y contraseña en sapling
        And Cambio la url
        And Recorro la tabla y en el campo Acces y verifico que diga "public" o "private"

    Scenario: Verificar el access
        Given Abrir Sapling
        When Ingresar usuario y contraseña en sapling
        And Cambio la url
        And Recorro la tabla y verifico que en el campo Description diga "Item Description" y en el campo Item Type diga "performance"
