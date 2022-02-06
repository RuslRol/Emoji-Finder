const Icon = ({symbol, title, keywords}) => {
  return (
    <div className="emoji-card">
      <p className="emoji-symbol">{symbol}</p>
      <h1 className="emoji-title">{title}</h1>
      <p className="emoji-keywords">{keywords}</p>
    </div>
  )
}
export default Icon;   