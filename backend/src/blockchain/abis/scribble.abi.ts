// Placeholder ABI for the Scribble contract. Replace with real ABI when available.
export const SCRIBBLE_ABI: any[] = [
  {
    type: 'function',
    name: 'publishScribble',
    inputs: [
      { name: 'scribeId', type: 'uint256' },
      { name: 'contentHash', type: 'string' },
      { name: 'tags', type: 'string[]' },
    ],
    outputs: [{ name: 'scribbleId', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'upvote',
    inputs: [{ name: 'scribbleId', type: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'comment',
    inputs: [
      { name: 'scribbleId', type: 'uint256' },
      { name: 'text', type: 'string' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'unlockContent',
    inputs: [{ name: 'scribbleId', type: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'ScribblePublished',
    inputs: [
      { name: 'scribbleId', type: 'uint256', indexed: true },
      { name: 'scribeId', type: 'uint256', indexed: true },
      { name: 'contentHash', type: 'string', indexed: false },
      { name: 'tags', type: 'string[]', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Upvoted',
    inputs: [
      { name: 'scribbleId', type: 'uint256', indexed: true },
      { name: 'by', type: 'address', indexed: true },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Commented',
    inputs: [
      { name: 'scribbleId', type: 'uint256', indexed: true },
      { name: 'by', type: 'address', indexed: true },
      { name: 'text', type: 'string', indexed: false },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ContentUnlocked',
    inputs: [
      { name: 'scribbleId', type: 'uint256', indexed: true },
      { name: 'by', type: 'address', indexed: true },
    ],
    anonymous: false,
  },
];
