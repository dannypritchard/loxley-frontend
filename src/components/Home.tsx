import { useState, useEffect } from 'react';
import axios from 'axios';
import loxley from '../assets/cat.jpg';

export default function Home() {
    type Data = {
        title: string,
        subtitle: string,
        content: Array<{
            title: string,
            content: string,
        }>,
    };
    const [post, setPost] = useState<Data>();

    const baseURL = `${import.meta.env.VITE_API_URL}/`;

    useEffect(() => {
        axios.get(baseURL).then((response: any) => {
            setPost(response.data);
        });
    }, []);

    if (!post) {
        return null;
    }
    return (
        <>
            <h2>{post.title}</h2>
            <h3>{post.subtitle}</h3>

            {post.content.forEach((c) => (
                <>
                    <h4>{c.title}</h4>
                    <p>{c.content}</p>
                </>
            ))}

            <img src={loxley} alt="" className="w-500" />
        </>
    );
}
