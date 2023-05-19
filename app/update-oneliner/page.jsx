"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateOneliner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onelinerId = searchParams.get("id");

  const [post, setPost] = useState({ oneliner: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getOnelinerDetails = async () => {
      const response = await fetch(`/api/oneliner/${onelinerId}`);
      const data = await response.json();

      setPost({
        oneliner: data.oneliner,
        tag: data.tag,
      });
    };

    if (onelinerId) getOnelinerDetails();
  }, [onelinerId]);

  const updateOneliner = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!onelinerId) return alert("Missing OnelinerId!");

    try {
      const response = await fetch(`/api/oneliner/${onelinerId}`, {
        method: "PATCH",
        body: JSON.stringify({
          oneliner: post.oneliner,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateOneliner}
    />
  );
};

export default UpdateOneliner;
