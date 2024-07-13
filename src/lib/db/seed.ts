import { db } from '.'
import { users } from './schema'

export async function main() {
  try {
    // const [newUser] = await db
    //   .insert(users)
    //   .values({
    //     name: 'Serge',
    //     email: 'serge@test.com',
    //     password: 'Secret123',
    //   })
    //   .returning()

    // if (!newUser) {
    //   throw new Error('new User is not created')
    // }

    // await db.insert(posts).values([
    //   {
    //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //     content:
    //       ' Duis varius pellentesque magna, eget interdum ante pharetra eu. Sed ut urna mi. Vivamus fermentum metus lacus, eu pretium risus mollis a. Donec eleifend erat enim, hendrerit lobortis turpis semper at. Etiam nec commodo urna. Donec ultricies elit vel ipsum interdum, iaculis pulvinar leo aliquet. Cras ut tellus tellus.',
    //     createdById: newUser.id,
    //   },
    //   {
    //     title:
    //       'Phasellus cursus felis ut ipsum condimentum posuere sit amet at nulla.',
    //     content:
    //       'Maecenas at nisi at sem pretium fermentum a sed nisi. Vestibulum faucibus lobortis tellus ut accumsan. Sed blandit vulputate ante quis finibus. Pellentesque non ullamcorper turpis.',
    //     createdById: newUser.id,
    //   },
    //   {
    //     title: 'Vivamus varius cursus faucibus.',
    //     content:
    //       'Donec in euismod urna. Aliquam erat volutpat. Morbi posuere lacinia luctus. Donec rhoncus ipsum hendrerit elit volutpat, a cursus elit efficitur. Maecenas est leo, porttitor a venenatis sit amet, porta quis odio. Morbi iaculis arcu at gravida accumsan. Quisque sagittis orci vel lacus tempor, a molestie velit volutpat.',
    //     createdById: newUser.id,
    //   },
    // ])
    await db.insert(users).values({
      username: 'sergeB',
      email: 'serge@gmail.com',
    })
    console.log('Database seeded 👍')
  } catch (error) {
    console.warn('DB seed error 💥 : ', error)
  }
}
