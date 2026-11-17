import { useState } from 'react'
import type { MouseEvent } from 'react'
import { FiDownload, FiEye } from 'react-icons/fi'
import Modal from '@/components/ui/Modal'

interface ResumeActionsProps {
  url: string
  fileName: string
}

// Phones and tablets don't render PDFs inline reliably (iOS shows one page,
// many Android browsers show nothing), so only embed on a desktop-class
// viewport with a precise pointer. Everywhere else the link opens the PDF
// in a new tab, where the browser's own viewer takes over.
const canEmbedPdf = () =>
  window.matchMedia('(min-width: 768px) and (pointer: fine)').matches

const segmentClasses =
  'inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent'

export default function ResumeActions({ url, fileName }: ResumeActionsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handlePreview = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!canEmbedPdf()) return
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <>
      <div className="inline-flex items-stretch overflow-hidden rounded-full border border-border bg-surface">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          onClick={handlePreview}
          className={segmentClasses}
        >
          <FiEye size={16} aria-hidden="true" /> Preview resume
        </a>
        <a
          href={url}
          download={fileName}
          className={`${segmentClasses} border-l border-border`}
        >
          <FiDownload size={16} aria-hidden="true" /> Download
        </a>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border pl-5 pr-14">
          <p className="truncate text-sm font-medium text-ink">{fileName}</p>
          <a
            href={url}
            download={fileName}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <FiDownload size={14} aria-hidden="true" /> Download
          </a>
        </div>
        <iframe
          src={`${url}#view=FitH`}
          title="Resume preview"
          className="min-h-0 flex-1 bg-white"
        />
      </Modal>
    </>
  )
}
