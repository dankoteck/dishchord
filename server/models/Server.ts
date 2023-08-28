import { defineMongooseModel } from "#nuxt/mongoose";

export const Server = defineMongooseModel("Server", {
  channelIds: {
    type: [String],
    required: true,
    default: [],
  },
});
