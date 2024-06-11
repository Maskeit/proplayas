import { useRouter } from "next/router"

export const PostInfo = () => {
  const router = useRouter();
  const {id } = router.query;
  console.log(id, "product info");
  return (
    <div>
      Jdoer
    </div>
  )
}
