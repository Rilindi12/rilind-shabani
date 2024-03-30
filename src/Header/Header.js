import './Header.css'

export default function Header ({image,intro, name,description}) {
  return (
    <div className="header">
        <img src={image} alt={name + "image profile"}/>
        <div className="text-wrapper">
        <h1 className="intro">{intro} <em className="name">{name}</em></h1>
        <p className="description">{description}</p> 
        </div>
    </div>
  )
}