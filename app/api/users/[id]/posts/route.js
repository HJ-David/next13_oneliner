import Oneliner from "@models/oneliner";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const oneliners = await Oneliner.find({ creator: params.id }).populate(
          "creator"
        );

        return new Response(JSON.stringify(oneliners), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch oneliners created by user", {
          status: 500,
        });
    }
} 