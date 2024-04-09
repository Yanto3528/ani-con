'use client';

import React, { useEffect, useState } from 'react';

import dompurify from 'dompurify';
// import parse, { DOMNode } from 'html-react-parser';
import parse from 'html-react-parser';
// import { twMerge } from 'tailwind-merge';

type Props = {
  children?: string | null;
  className?: string;
  maxCharacters?: number;
  defaultValue?: string;
};

const sanitizeString = (str: string) => {
  if (typeof window === 'undefined' || !str || !dompurify) {
    return str;
  }

  return dompurify.sanitize(str);
};

// function transform(reactNode: ReactNode, domNode: DOMNode, index: number) {
//   if (typeof reactNode !== 'string' && reactNode.type === 'p') {
//     return (
//       <p
//         className={twMerge(reactNode.props.className, reactNode.props.children ? '' : 'pb-5')}
//         key={index}
//       >
//         {reactNode.props.children}
//       </p>
//     );
//   }

//   if (typeof reactNode !== 'string' && reactNode.type === 'a') {
//     return (
//       <a href={reactNode.props.href} target="_blank" rel="noreferrer" key={index}>
//         {reactNode.props.children}
//       </a>
//     );
//   }

//   return reactNode;
// }

export function HtmlRenderer({ children, className, maxCharacters, defaultValue }: Props) {
  const [displayedContent, setDisplayedContent] = useState(children);

  useEffect(() => {
    let currentSize = 0;

    function applyNodes(element: HTMLElement, parent: HTMLElement) {
      if (maxCharacters) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.childNodes.forEach((item: any) => {
          if (item.nodeType === Node.ELEMENT_NODE) {
            const newParent = document.createElement(item.nodeName);
            if (item.nodeName === 'A') {
              newParent.setAttribute('href', item.getAttribute('href'));
              newParent.setAttribute('target', item.getAttribute('target'));
              newParent.setAttribute('rel', item.getAttribute('rel'));
            }
            applyNodes(item, newParent);

            if (newParent.textContent) {
              parent.appendChild(newParent);
            }
          } else {
            const diff = maxCharacters - currentSize;
            let value = item.textContent;

            if (item.textContent.length >= diff) {
              value = diff >= 0 ? `${value.substring(0, diff)}...` : '';
              parent.append(value);
              currentSize += value.length;
              return;
            }
            parent.append(value);
            currentSize += value.length;
          }
        });
      }
    }

    if (maxCharacters) {
      const fullElement = document.createElement('div');
      fullElement.innerHTML = children || '';
      const shortElement = document.createElement('div');
      applyNodes(fullElement, shortElement);
      setDisplayedContent(shortElement.innerHTML);
    } else {
      setDisplayedContent(children);
    }
  }, [children, maxCharacters]);

  if (!displayedContent) {
    return defaultValue || null;
  }

  return <div className={className}>{parse(sanitizeString(displayedContent || ''))}</div>;
}
