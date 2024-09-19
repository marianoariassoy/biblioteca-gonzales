import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'

const Share = ({ url }) => {
  return (
    <div className='w-full max-w-6xl m-auto px-6 flex gap-x-3'>
      <EmailShareButton url={url}>
        <EmailIcon
          size={32}
          round={true}
        />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon
          size={32}
          round={true}
        />
      </FacebookShareButton>

      <TwitterShareButton url={url}>
        <TwitterIcon
          size={32}
          round={true}
        />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon
          size={32}
          round={true}
        />
      </LinkedinShareButton>

      <TelegramShareButton url={url}>
        <TelegramIcon
          size={32}
          round={true}
        />
      </TelegramShareButton>

      <WhatsappShareButton url={url}>
        <WhatsappIcon
          size={32}
          round={true}
        />
      </WhatsappShareButton>
    </div>
  )
}

export default Share
