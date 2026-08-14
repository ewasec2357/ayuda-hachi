import { useState } from 'react';
import { Copy, Check, TextCursorInput } from 'lucide-react';

interface CopyButtonProps {
  value: string;
  targetRef?: React.RefObject<HTMLElement>;
  className?: string;
}

type Status = 'idle' | 'copied' | 'select';

export function CopyButton({ value, targetRef, className = '' }: CopyButtonProps) {
  const [status, setStatus] = useState<Status>('idle');

  function flash(next: Status, ms: number) {
    setStatus(next);
    setTimeout(() => setStatus('idle'), ms);
  }

  async function handleCopy() {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        flash('copied', 2000);
        return;
      } catch {
        // fall through to legacy fallback
      }
    }

    if (fallbackExecCommandCopy(value)) {
      flash('copied', 2000);
      return;
    }

    if (targetRef?.current) {
      selectElementText(targetRef.current);
    }
    flash('select', 3000);
  }

  const label = status === 'copied' ? 'Copiado' : status === 'select' ? 'Selecciona y copia' : 'Copiar';
  const Icon = status === 'copied' ? Check : status === 'select' ? TextCursorInput : Copy;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 border border-tinta/15 px-4 py-2 font-mono text-sm uppercase tracking-wide text-tinta hover:border-ambar focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar focus-visible:ring-offset-2 ${className}`}
    >
      <Icon size={16} className={status === 'copied' ? 'text-salvia' : undefined} />
      {label}
    </button>
  );
}

function fallbackExecCommandCopy(text: string): boolean {
  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'fixed';
  el.style.top = '-1000px';
  el.style.left = '-1000px';
  document.body.appendChild(el);
  el.focus();
  el.select();
  el.setSelectionRange(0, text.length);
  let success = false;
  try {
    success = document.execCommand('copy');
  } catch {
    success = false;
  }
  document.body.removeChild(el);
  return success;
}

function selectElementText(el: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}
