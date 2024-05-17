import React from 'react'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// 'https://jsonplaceholder.typicode.com/todos'

import BasicCard from '../../components/BasicCard/BasicCard';

import './Todos.css';

const getPosts = () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
    );

const Todos = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        // staleTime: 4000,
        // Stale querries are refetched automatically in the background when the following things happend.
        // When the new instance of the querry is mounted.
        // When the window is refocused.
        // When the network is reconnected.
        // When the querry is optionally reconfigured such as refetchInterval().

        // refetchOnWindowFocus: false, // Removes the refetching when changing browser windowses.
        // retry: 5, // Retry to refetch 5 times.
        // refetchInterval: 4000, // auto refetch the data every 4 seconds.
    });

    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: (newPost) =>
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            }).then((res) => res.json()),
        onSuccess: (newPost) => {
            // queryClient.invalidateQueries({queryKey: ["posts"]}); // Refetching the data from the website and add it to the cash.
            queryClient.setQueryData(['posts'], (oldPosts) => [...oldPosts, newPost]); // Manually added the new post to the cash.
        },
    });

    if (error) return <div>There was an error!</div>;

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="Todos">
            {isPending && <h4>DATA IS BEING ADDED..</h4>}

            <button
                onClick={() =>
                    mutate({
                        userId: 3412,
                        id: 2312,
                        title: "Hristo's Post",
                        body: "Body of the Hristo's Post..",
                    })
                }
            >
                Add Post
            </button>


            {data &&
                data.map((todo) => (
                    <BasicCard key={todo.id} props={todo} >
                    </BasicCard>
                ))
            }
        </div>
    )
}

export default Todos;

{/* {data &&
  data.map((todo) => (
    <div>
      <h5>ID: {todo.id}</h5>
      <h5>Title: {todo.title}</h5>
      <p>{todo.body}</p>
    </div>
  ))} */}