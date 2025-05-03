import React from "react";

export default function RefundPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">Last Updated: May 3, 2025</p>
      <p className="mb-4">
        {`This Refund Policy applies to the subscription fees paid for the Spotnxt service (the "Service") provided by YBOne Strategic Solutions Private Limited ("YBOne", "we", "us", or "our").`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Subscription Fees are Non-Refundable
      </h2>
      <p className="mb-4">
        {`As Spotnxt is offered on a month-on-month recurring subscription basis, all subscription fees are non-refundable. Once a payment has been processed for a particular billing cycle, no refunds or credits will be issued for any unused portion of the subscription period, including for cancellation prior to the end of the month.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Cancellation</h2>
      <p className="mb-4">
        {`You can cancel your subscription at any time through your account settings. Your cancellation will be effective at the end of your current billing cycle, and you will not be charged for the subsequent month. However, you will not receive a refund for the current month's subscription fee.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. No Refunds for Downgrades
      </h2>
      <p className="mb-4">
        {`If you downgrade your subscription plan, the downgrade will take effect at the end of your current billing cycle. You will not receive a refund or credit for any difference in price between your previous plan and the new plan for the current month.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Exceptions</h2>
      <p className="mb-4">
        {`In exceptional circumstances, such as a significant and prolonged service outage directly attributable to our gross negligence, we may consider issuing a pro-rata refund or credit at our sole discretion. Any such decision will be made on a case-by-case basis after thorough investigation.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Payment Disputes</h2>
      <p className="mb-4">
        {`If you have a billing dispute, you must contact us in writing via email at support@ybonesolutions.com within thirty (30) days of the date of the disputed charge. Please include detailed information about the disputed transaction and the reason for your dispute. We will review your claim diligently and respond within a reasonable timeframe. If we determine that the charge was incorrect, we will take appropriate corrective action.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Refund Processing
      </h2>
      <p className="mb-4">
        {`In the event that we approve a refund under the limited exceptions mentioned in Section 4 or as a result of a successfully resolved billing dispute where a refund is deemed appropriate, Refund will be credited to original payment method within 5 to 7 business days. The processing time for the refund to appear in your account may vary depending on your payment provider and their internal procedures. We will use commercially reasonable efforts to ensure timely processing of any approved refunds.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Changes to this Refund Policy
      </h2>
      <p className="mb-4">
        {`We reserve the right to modify this Refund Policy at any time. Any changes will be posted on our website or within the Service, and the "Last Updated" date at the top of this policy will be revised accordingly. We encourage you to review this Refund Policy periodically for any updates or changes. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Refund Policy.`}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        {`If you have any questions regarding this Refund Policy, please contact us at:`}
      </p>
      <p className="mb-2">YBOne Strategic Solutions Private Limited</p>
      <p className="mb-4">support@ybonesolutions.com</p>
    </main>
  );
}
