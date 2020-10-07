const { MediaPanelDummyData } = require("./dummy-data");

const resolvers = {
  Query: {
    mediaPanelList: () => MediaPanelDummyData,
    mediaPanelDetails: (parent, args, context, info) => ({
      id: "http://url-to-the-data.com/1325853",
      added: 1600952507000,
      guid: "urn:data-site:console:panel:media-detail-status",
      id: "http://url-to-the-data.com/1325853",
      locked: false,
      ownerId: "http://access.auth.data-site.com/data/Account/2035709114",
      order: 3,
      title: "Publish Status",
      updated: 1600952507000
    })
    //   MediaPanel.findById(args.id)
  },
  Mutation: {
    // addMediaPanel: (parent, mediaPanel) => {
    //   const { username, description, duration, category, date } = mediaPanel;
    //   // addMediaPanel: (parent, { username, description, duration, date }) => {
    //   // Create a new record in the database
    //   const newMediaPanel = new MediaPanel({
    //     username: username,
    //     description: description,
    //     duration: duration,
    //     category: category,
    //     date: date
    //   });
    //   // Save the record and return it
    //   return newMediaPanel.save();
    // },
    // updateMediaPanel: async (parent, mediaPanel) => {
    //   // console.log(`\nresolver values: ${JSON.stringify(mediaPanel)}`);
    //   const {
    //     id,
    //     username,
    //     description,
    //     duration,
    //     category,
    //     date
    //   } = mediaPanel;
    //   try {
    //     const mediaPanelToUpdate = await MediaPanel.findById(id);
    //     console.log(
    //       `mediaPanelToUpdate: ${JSON.stringify(mediaPanelToUpdate)}`
    //     );
    //     mediaPanelToUpdate.username = username;
    //     mediaPanelToUpdate.description = description;
    //     mediaPanelToUpdate.duration = duration;
    //     mediaPanelToUpdate.category = category;
    //     mediaPanelToUpdate.date = date;
    //     // Save the record and return it
    //     return mediaPanelToUpdate.save();
    //   } catch (error) {
    //     throw new Error(`Mongo - no record found for id: ${id}: \n\t${error}`);
    //   }
    // }
  }
};

module.exports = resolvers;
