import { forwardRef } from 'react';

export const Menu2 = forwardRef<HTMLElement>((props, ref) => (
  <section ref={ref} {...props}>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>
        <strong>Payments</strong>
        <ul>
          <li>Online payments</li>
          <li>Checkout</li>
          <li>Elements</li>
          <li>Payment Links</li>
          <li>Radar</li>
          <li>Connect</li>
        </ul>
      </li>
      <li>
        <strong>Billing</strong>
        <ul>
          <li>Subscription management</li>
          <li>Invoicing</li>
          <li>Terminal</li>
          <li>Financial Connections</li>
          <li>Identity</li>
          <li>Climate</li>
        </ul>
      </li>
    </ul>
  </section>
));

export default Menu2;
