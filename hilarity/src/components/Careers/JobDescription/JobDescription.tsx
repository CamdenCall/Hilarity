import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@sanity/types'
import "./JobDescription.scss"

interface JobDescriptionProps {
    content: PortableTextBlock[]
}

const JobDescription: React.FC<JobDescriptionProps> = ({ content }) => {
  return (
    <div className="prose max-w-none">
      <PortableText value={content} />
    </div>
  )
}

export default JobDescription
