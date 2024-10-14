
const page = ({params}: {params: {plantName: string}}) => {
    const plantName = params.plantName
  return (
    <div>{plantName}</div>
  )
}

export default page