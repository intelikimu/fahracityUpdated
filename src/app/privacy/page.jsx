export const metadata = {
  title: 'Privacy Policy | Fahracity',
  description: 'Our commitment to protecting your privacy and data. Learn how we collect, use, and protect your information.'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-8 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Fahracity ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fahracity.com or use our technology services.
            </p>
            <p className="text-gray-300 mb-4">
              We provide cutting-edge technology solutions including AI & Machine Learning, Blockchain Solutions, Cloud Services, Custom Software Development, IoT Solutions, and Cybersecurity services. This policy applies to all information collected through our website, services, and any related communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-white mb-3">2.1 Personal Information</h3>
            <p className="text-gray-300 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
              <li><strong>Account Information:</strong> Username, password, profile information</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence with us</li>
              <li><strong>Service Information:</strong> Details about your technology needs, project requirements, and service preferences</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">2.2 Technical Information</h3>
            <p className="text-gray-300 mb-4">We automatically collect certain technical information:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, referral sources</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience</li>
              <li><strong>Analytics Data:</strong> Website performance metrics and user behavior analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our technology services</li>
              <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send service-related updates</li>
              <li><strong>Business Operations:</strong> To process payments, manage accounts, and fulfill contractual obligations</li>
              <li><strong>Marketing:</strong> To send promotional materials, newsletters, and information about our services (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze website usage, improve user experience, and develop new services</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our services (hosting, analytics, payment processing)</li>
              <li><strong>Business Partners:</strong> With strategic partners when necessary to deliver our technology solutions</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
              <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication systems</li>
              <li>Secure data centers and infrastructure</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-300 mb-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or anonymize your information when it is no longer needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
              <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-300 mb-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@fahracity.com" className="text-blue-400 hover:text-blue-300">privacy@fahracity.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300 mb-4">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#1a1a1a] rounded-lg p-8 shadow-lg border border-[#2a2a2a]">
              <p className="text-gray-300 mb-2"><strong>Fahracity</strong></p>
              <p className="text-gray-300 mb-2">Email: <a href="mailto:privacy@fahracity.com" className="text-blue-400 hover:text-blue-300">privacy@fahracity.com</a></p>
              <p className="text-gray-300 mb-2">General Inquiries: <a href="mailto:info@fahracity.com" className="text-blue-400 hover:text-blue-300">info@fahracity.com</a></p>
              <p className="text-gray-300">Phone: <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300">(555) 123-4567</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


