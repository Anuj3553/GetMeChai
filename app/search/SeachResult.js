"use server"
import connectDB from '@/db/connectDB'
import User from '@/models/User'

export default async function SearchResult(str) {
    await connectDB()

    let searchTerm = `${str}`

    const convertFirstLetter = (text) => {
        const convert = text.replace(/(^\w(1))|(\.\s*\w(1))/g, (match) => match.toUpperCase())
        return convert
    }

    const searchTermFirst = convertFirstLetter(searchTerm)

    let results = await User.find({
        $or: [
            {
                username: { $regex: searchTerm, $options: 'i' }
            },
            {
                email: { $regex: searchTerm, $options: 'i' }
            },
            {
                name: { $regex: searchTerm, $options: 'i' }
            }
        ]
    });

    return results
}