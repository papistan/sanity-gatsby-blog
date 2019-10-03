export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d95641ab1a34854c1cd4a1e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z4a7xaui',
                  apiId: '8f79096c-edf7-4aad-ac89-7ebaa1e08308'
                },
                {
                  buildHookId: '5d95641a2273707be823597b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j16u3qgo',
                  apiId: 'acc497b3-2d6f-4177-9491-28a43045f30d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/papistan/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j16u3qgo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
