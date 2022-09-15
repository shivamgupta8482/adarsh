export default function FeaturesCard({src,heading,text}){
    return(
      <div>
        <Image src={src} />
        <h1>{heading}</h1>
        <br />
        <p>{text}</p>


      </div>
    )
}