// src/app/home/advertisers/content/AdvertiserBenefits.tsx

export function AdvertiserBenefits() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{/* Benefit 1 */}
			<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
				<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 mb-4">
					<span className="text-3xl">📊</span>
				</div>
				<h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Manager Platform</h3>
				<p className="text-gray-600 leading-relaxed">
					Manage all your guest post campaigns in one dashboard with real-time tracking.
				</p>
			</div>

			{/* Benefit 2 */}
			<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
				<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-600 mb-4">
					<span className="text-3xl">⏰</span>
				</div>
				<h3 className="text-xl font-bold text-gray-900 mb-3">Automatic Deadline Tracking</h3>
				<p className="text-gray-600 leading-relaxed">
					Never miss a deadline with automated reminders and progress notifications.
				</p>
			</div>

			{/* Benefit 3 */}
			<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
				<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 mb-4">
					<span className="text-3xl">✏️</span>
				</div>
				<h3 className="text-xl font-bold text-gray-900 mb-3">Revision Management System</h3>
				<p className="text-gray-600 leading-relaxed">
					Request changes and track revisions seamlessly within the platform.
				</p>
			</div>

			{/* Benefit 4 */}
			<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
				<div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 mb-4">
					<span className="text-3xl">🧾</span>
				</div>
				<h3 className="text-xl font-bold text-gray-900 mb-3">Tax-Ready Invoice Downloads</h3>
				<p className="text-gray-600 leading-relaxed">
					Export detailed invoices for accounting and tax purposes with one click.
				</p>
			</div>
		</div>
	);
}