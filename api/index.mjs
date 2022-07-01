
export default async function main(req) {
  const result = await data.get({
    table: `notes-${userID}`,
    key: noteID
  })

/*
  // speakers
    speaker-id
    // talks
      speaker-id-talk-id
      // topics ( esm, react )
      talks-id-topic-id
      speakers-id-topic-id
      topic-id-speaker-id
      topic-id-talk-id


  const res = await data.set([{
      table: `notes-${userID}`,
      key: noteID
    },

  ])

  // users
    // posts
      // tags

 1. hardcode data
 2. write schema
 3. generate forms from shema
 4. store in db
 5. get data from db
*/


  return {
// location: `/notes/${noteID}`,
// errors: [{ message: 'Note not found' }],
// session: {},
// headers: {},
    data: {
      title: 'My website'
    }
  }
}