import { type Article } from '@/types'

export const serveMockData = <D = any>({
  data,
  error,
  timeout = 1000,
}: {
  data: D
  error?: string
  timeout?: number
}): Promise<D> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error(error))
      } else {
        resolve(data)
      }
    }, timeout)
  })

export const articles: Article[] = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Dsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    image: {
      url: 'https://pixabay.com/get/gb67b2254bff137c056df2854bf2e189117b09d18b8baa8f1e04ba503203f73d726c1a3412f85f70b7c8270041fe8da5c_1280.jpg',
      alt: 'Pixabay Lorem',
    },
  },
  {
    id: '2',
    title:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    image: {
      url: 'https://pixabay.com/get/g3db216a720b3441cd569f00ac5381ea06403d7bcfe185d33f8d06a4f34d6cd5addac46332152db5f21617be0a73922ec65bf50c35dc9e853ec8364834754fff5_1280.jpg',
      alt: 'Lorem bulbs',
    },
  },

  {
    id: '3',
    title:
      'Wed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
    description:
      'Fadipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    image: {
      url: 'https://pixabay.com/get/g9312ec01967e04d9a17810869cbbd0805a06d3990d4eaf4303effd52c31bbd9bc5e9830e9d201de163501e74acc80530def863b960f428dedf89c31486ae01cd_1280.jpg',
      alt: 'One bulb blue',
    },
  },

  {
    id: '4',
    title: 'Quis autem vel eum iure reprehenderit qui in ea',
    description:
      'voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    image: {
      url: 'https://pixabay.com/get/g91f74ab1a5bc36b4edda3458437a5458d5b5658f96511f99a4e9b65cbbfe761cf56abcca3f778e74a8bbc0c8e2b1f160e17a1bc0f976ca82eee65960d133e923_1280.jpg',
      alt: 'Landscape tropical',
    },
  },

  {
    id: '5',
    title:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos',
    description:
      'Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio',
    image: {
      url: 'https://pixabay.com/get/g0cc1e01ad21f6552415907bb54e984ec283636b6f3cfd202ccb1bf33ace53e7ed7961cd3413d23dfa369069c27d33493f7763d50a3d9d57af1444c00bc51ddf3_1280.jpg',
      alt: 'Sea shells',
    },
  },

  {
    id: '6',
    title: 'Nam libero tempore, cum soluta nobis est',
    description:
      'Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
    image: {
      url: 'https://pixabay.com/get/gf1595e82772e495b985a3a08540790edc8a6f4044e6590f3ee7b1fc61313e9fd8b20f7047c9765868bf1a68142a49ebd3827e3d48750de83a8eb607f25024df9_1280.jpg',
      alt: 'Sand canyons',
    },
  },
]

export const planetaryData = [
  {
    id: 1,
    image: {
      src: 'https://assets.codepen.io/296057/fem-io.jpg',
      alt: 'A pizza-looking moon. The outline of an erupting volcano is on the left.',
    },
    caption: 'Volcanic Activity on Io via',
    citeLink: {
      href: 'https://images.nasa.gov/details/PIA01530',
      title: 'NASA',
    },
  },
  {
    id: 2,
    image: {
      src: 'https://assets.codepen.io/296057/fem-callisto.jpg',
      alt: 'A moon with green, brown, and blue patches and many white craters.',
    },
    caption: ` Bright scars on a darker surface testify to a long history of impacts
          on Jupiter moon Callisto in this image of Callisto from NASA Galileo
          spacecraft.`,
    citeLink: {
      href: 'https://images.nasa.gov/details/PIA03456',
      title: 'NASA',
    },
  },
  {
    id: 3,
    image: {
      src: 'https://assets.codepen.io/296057/fem-europa.jpg',
      alt: 'A white moon with orange cracks all over the surface.',
    },
    caption: `The scene shows the stunning diversity of Europa's surface
          geology. Long, linear cracks and ridges crisscross the surface,
          interrupted by regions of disrupted terrain where the surface ice
          crust has been broken up and re-frozen into new patterns.`,
    citeLink: {
      href: 'https://images.nasa.gov/details/PIA19048',
      title: 'NASA',
    },
  },
  {
    id: 4,
    image: {
      src: 'https://assets.codepen.io/296057/fem-ganymede.jpg',
      alt: 'A moon that looks similar to our own, with a giant crater in the upper right.',
    },
    caption: `
      This enhanced image of the Jovian moon Ganymede was obtained by the
          JunoCam imager aboard NASA's Juno spacecraft during the
          mission's June 7, 2021, flyby of the icy moon on Juno's 34th
          pass close to Jupiter.
    `,
    citeLink: {
      href: 'https://images.nasa.gov/details/PIA25028',
      title: 'NASA',
    },
  },
]

export const moonImages = [
  {
    id: 1,
    src: 'https://images-assets.nasa.gov/image/PIA01546/PIA01546~orig.jpg',
  },
  {
    id: 2,
    src: 'https://images-assets.nasa.gov/image/PIA00407/PIA00407~small.jpg',
  },
  {
    id: 3,
    src: 'https://images-assets.nasa.gov/image/PIA13593/PIA13593~orig.jpg',
  },
  {
    id: 4,
    src: 'https://images-assets.nasa.gov/image/PIA08528/PIA08528~orig.jpg',
  },
  {
    id: 5,
    src: 'https://images-assets.nasa.gov/image/PIA05208/PIA05208~small.jpg',
  },
]
