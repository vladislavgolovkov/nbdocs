module.exports = {
    title: 'NitrosBase',
    link: 'http://nitrosbase.com',
    themeConfig: {
        sidebarDepth: 4,
      sidebar: [
        '/',
        'ustanovka-i-administrirovanie',
        '/demonstracionnaya-baza-dannykh',
        '/multimodelnost',
        '/sql',
        'graph-it',
        {
            title: 'API',
            collapsable: true,
            sidebarDepth: 4,
            children: [
                '/c-api',
                '/dotnet-api',
                '/odbc'
            ]
          },
        'log'
      ]
    }
  }