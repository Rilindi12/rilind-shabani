import './TabButton.css'

export default function TabButton ({children,link,direction, downloadFileName}) {

  return (
    <li>
      <a href={link} target={direction} download={downloadFileName? downloadFileName:null}>
        <button className='buttons'>{children}</button>
      </a>
    </li>

  )
}