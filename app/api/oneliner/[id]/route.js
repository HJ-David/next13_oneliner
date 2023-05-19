import Oneliner from "@models/oneliner";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const oneliner = await Oneliner.findById(params.id).populate("creator");
        if (!oneliner)
          return new Response("Oneliner Not Found", { status: 404 });

        return new Response(JSON.stringify(oneliner), { status: 200 });

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { oneliner, tag } = await request.json();

    try {
      await connectToDB();

      // Find the existing oneliner by ID
      const existingOneliner = await Oneliner.findById(params.id);

      if (!existingOneliner) {
        return new Response("Oneliner not found", { status: 404 });
      }

      // Update the oneliner with new data
      existingOneliner.oneliner = oneliner;
      existingOneliner.tag = tag;

      await existingOneliner.save();

      return new Response("Successfully updated the Oneliners", {
        status: 200,
      });
    } catch (error) {
        return new Response("Error Updating Oneliner", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
      await connectToDB();

      // Find the oneliner by ID and remove it
      await Oneliner.findByIdAndRemove(params.id);

      return new Response("Oneliner deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting oneliner", { status: 500 });
    }
};
