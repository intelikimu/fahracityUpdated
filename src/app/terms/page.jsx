export const metadata = {
  title: 'Terms of Service | Fahracity',
  description: 'The terms and conditions that govern your use of our website and technology services.'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-gray-300 mb-8 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Fahracity ("Company," "we," "our," or "us") regarding your use of our website, services, and any related technology solutions. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-300 mb-4">
              If you do not agree to these Terms, you may not access or use our services. We reserve the right to modify these Terms at any time, and your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p className="text-gray-300 mb-4">
              Fahracity provides cutting-edge technology solutions and consulting services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>AI & Machine Learning:</strong> Custom AI solution development, machine learning models, and predictive analytics</li>
              <li><strong>Blockchain Solutions:</strong> Smart contract development, decentralized applications, and token development</li>
              <li><strong>Cloud Services:</strong> Cloud migration, DevOps implementation, and serverless architecture</li>
              <li><strong>Custom Software:</strong> Enterprise applications, web development, mobile apps, and API development</li>
              <li><strong>IoT Solutions:</strong> IoT device development, smart systems, and industrial IoT solutions</li>
              <li><strong>Cybersecurity:</strong> Security assessments, penetration testing, and compliance implementation</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Our services are provided on a project basis, retainer, or hourly basis as agreed upon in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts and Registration</h2>
            <p className="text-gray-300 mb-4">
              To access certain features of our services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your account information to keep it accurate and current</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-300 mb-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Service Agreements and Project Terms</h2>
            <p className="text-gray-300 mb-4">
              Specific terms for individual projects will be outlined in separate service agreements or statements of work. These agreements may include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Project scope, deliverables, and timelines</li>
              <li>Pricing, payment terms, and billing schedules</li>
              <li>Intellectual property rights and ownership</li>
              <li>Confidentiality and non-disclosure obligations</li>
              <li>Warranties and limitations of liability</li>
              <li>Termination conditions and procedures</li>
            </ul>
            <p className="text-gray-300 mb-4">
              In case of conflict between these Terms and a specific service agreement, the service agreement shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms and Billing</h2>
            <p className="text-gray-300 mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Payment is due according to the schedule specified in your service agreement</li>
              <li>Late payments may incur additional charges as specified in the agreement</li>
              <li>All prices are exclusive of applicable taxes unless otherwise stated</li>
              <li>We reserve the right to suspend services for non-payment</li>
              <li>Refunds are subject to the terms specified in individual service agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property Rights</h2>
            <h3 className="text-xl font-medium text-white mb-3">6.1 Our Intellectual Property</h3>
            <p className="text-gray-300 mb-4">
              All content, software, technology, and materials provided by Fahracity, including but not limited to our website, documentation, methodologies, and proprietary tools, remain our exclusive property unless otherwise specified in a service agreement.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">6.2 Client Intellectual Property</h3>
            <p className="text-gray-300 mb-4">
              You retain ownership of your existing intellectual property. Any new intellectual property created specifically for your project will be owned by you as specified in the service agreement.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">6.3 License to Use</h3>
            <p className="text-gray-300 mb-4">
              We grant you a limited, non-exclusive, non-transferable license to use our services in accordance with these Terms and any applicable service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality and Non-Disclosure</h2>
            <p className="text-gray-300 mb-4">
              Both parties agree to maintain the confidentiality of all proprietary and confidential information disclosed during the course of our business relationship. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Technical information, trade secrets, and proprietary methodologies</li>
              <li>Business plans, financial information, and strategic data</li>
              <li>Client information and project details</li>
              <li>Any other information marked as confidential or that should reasonably be considered confidential</li>
            </ul>
            <p className="text-gray-300 mb-4">
              This obligation survives termination of our business relationship and continues indefinitely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Acceptable Use Policy</h2>
            <p className="text-gray-300 mb-4">You agree not to use our services for any unlawful or prohibited purpose. Specifically, you may not:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Transmit malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Engage in any activity that could harm our reputation or business</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-medium text-white mb-3">9.1 Service Warranties</h3>
            <p className="text-gray-300 mb-4">
              We warrant that our services will be performed in a professional manner consistent with industry standards. Specific warranties will be outlined in individual service agreements.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">9.2 Disclaimers</h3>
            <p className="text-gray-300 mb-4">
              EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS OR A SERVICE AGREEMENT, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-300 mb-4">
              We do not warrant that our services will be uninterrupted, error-free, or completely secure. You acknowledge that technology services involve inherent risks and uncertainties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FAHRACITY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM OR RELATED TO YOUR USE OF OUR SERVICES.
            </p>
            <p className="text-gray-300 mb-4">
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed the total amount paid by you for the specific services giving rise to the claim in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Indemnification</h2>
            <p className="text-gray-300 mb-4">
              You agree to indemnify, defend, and hold harmless Fahracity and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or related to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content or data you provide to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
            <p className="text-gray-300 mb-4">
              Either party may terminate these Terms or any service agreement with written notice as specified in the applicable agreement. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>All outstanding payments become immediately due</li>
              <li>Confidentiality obligations continue to apply</li>
              <li>Each party shall return or destroy confidential information</li>
              <li>Intellectual property rights remain as specified in the service agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Force Majeure</h2>
            <p className="text-gray-300 mb-4">
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, or other unforeseeable events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to conflict of law principles. Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. General Provisions</h2>
            <h3 className="text-xl font-medium text-white mb-3">15.1 Entire Agreement</h3>
            <p className="text-gray-300 mb-4">
              These Terms, together with any service agreements, constitute the entire agreement between you and Fahracity regarding the subject matter hereof.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">15.2 Severability</h3>
            <p className="text-gray-300 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">15.3 Waiver</h3>
            <p className="text-gray-300 mb-4">
              No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term.
            </p>
            
            <h3 className="text-xl font-medium text-white mb-3">15.4 Assignment</h3>
            <p className="text-gray-300 mb-4">
              You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[#1a1a1a] rounded-lg p-8 shadow-lg border border-[#2a2a2a]">
              <p className="text-gray-300 mb-2"><strong>Fahracity</strong></p>
              <p className="text-gray-300 mb-2">Email: <a href="mailto:legal@fahracity.com" className="text-blue-400 hover:text-blue-300">legal@fahracity.com</a></p>
              <p className="text-gray-300 mb-2">General Inquiries: <a href="mailto:info@fahracity.com" className="text-blue-400 hover:text-blue-300">info@fahracity.com</a></p>
              <p className="text-gray-300">Phone: <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300">(555) 123-4567</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
