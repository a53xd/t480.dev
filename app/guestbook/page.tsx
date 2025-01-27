import Comments from "@/components/comments/Comments";
import Card from "@/components/ui/card";

export default function CommentsTest() {
  return (
    <div className="h-full mt-4 w-screen max-w-full">
      <Card className="text-4xl mt-4 pl-4 max-w-full">
        <h1 className="text-4xl mt-4 pl-4">Guestbook</h1>
        <div className="text-xl mt-2 pl-4">
          Join in{" "}
          <a
            href="https://bsky.app/profile/t480.dev/post/3lgqk7dxvfs2p"
            className="text-purple-700 dark:text-purple-400"
          >
            on Bluesky
          </a>
          .
        </div>
        <div className="text-base">
          <Comments did="t480.dev" postCid="3lgqk7dxvfs2p" />
        </div>
      </Card>
    </div>
  );
}
