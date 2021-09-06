import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useResume } from "./Card.hooks"
import { CardStyle } from "./Card.style"
import { CardHeader } from "./CardHeader"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { Error } from "../Error"
import { Loader } from "../Loader"

export const Card = () => {
  const [{ error, isLoading, summary }, getSummary] = useResume()

  const { currentUser } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (currentUser.id !== 0) {
      getSummary(currentUser.id)
    }
  }, [currentUser.id])

  return (
    <CardStyle>
      <CardHeader />
      {error && <Error />}
      {isLoading && <Loader />}
      {!error && !isLoading && <CardBody {...summary} />}
      <CardFooter />
    </CardStyle>
  )
}
