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
                  buildHookId: '5fd4e86dc6f49ce069ce8e27',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-yzsuoq9g',
                  apiId: 'c6b42a51-d380-486f-9e09-fbb97e2d2901'
                },
                {
                  buildHookId: '5fd4e86d314ec1c4b03041b1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-x7hutkaz',
                  apiId: '4444132c-5667-486f-a3dd-63bbe48f0292'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rgottleber/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-x7hutkaz.netlify.app', category: 'apps'}
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
