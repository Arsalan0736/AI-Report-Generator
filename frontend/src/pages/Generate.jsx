import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Upload, Loader2, Download, Shield, X } from 'lucide-react';

const Generate = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '1', // Default to first year
    department: '',
    guideName: '',
    teamMembers: '',
    file: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate report generation
    setTimeout(() => {
      setIsLoading(false);
      setShowPreviewModal(true);
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async (plan) => {
    setSelectedPlan(plan);
    setIsProcessingPayment(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      // Here you would typically handle the actual payment and download
      alert(`Payment successful! Downloading ${plan === 'basic' ? 'basic' : 'plagiarism-free'} report...`);
      setShowPreviewModal(false);
    }, 2000);
  };

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Report',
      price: '₹21',
      features: ['Download Report', 'Standard Format', 'Basic Support'],
      icon: <Download className="h-6 w-6" />,
    },
    {
      id: 'premium',
      name: 'Plagiarism-Free Report',
      price: '₹30',
      features: ['Download Report', 'Plagiarism Check', 'Premium Support', 'Format Customization'],
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Generate Your Project Report
            </h1>
            <p className="text-lg text-gray-600">
              Create a professional project report that meets Mumbai University standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="card p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year
                  </label>
                  <select
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="input"
                    required
                  >
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="input"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="information-technology">Information Technology</option>
                    <option value="electronics">Electronics</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="civil">Civil</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="input"
                    placeholder="Enter your project title"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="guideName" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Guide Name
                  </label>
                  <input
                    type="text"
                    id="guideName"
                    value={formData.guideName}
                    onChange={(e) => setFormData({ ...formData, guideName: e.target.value })}
                    className="input"
                    placeholder="Enter your project guide's name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Members
                  </label>
                  <input
                    type="text"
                    id="teamMembers"
                    value={formData.teamMembers}
                    onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                    className="input"
                    placeholder="Enter team members' names (comma separated)"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="input min-h-[120px]"
                    placeholder="Describe your project..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Files (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOCX, or images up to 10MB</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 px-8 py-4 text-lg min-w-[200px]"
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FileText className="h-5 w-5" />
                      Generate Report
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Preview Section */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Preview</h2>
              <div className="aspect-[3/4] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                {preview ? (
                  <img src={preview} alt="Preview" className="max-w-full max-h-full object-contain" />
                ) : (
                  <div className="text-center text-gray-500">
                    <FileText className="mx-auto h-12 w-12 mb-4" />
                    <p>Your report preview will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Modal */}
          <AnimatePresence>
            {showPreviewModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Report Preview</h2>
                      <button
                        onClick={() => setShowPreviewModal(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    {/* Report Preview */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">{formData.title}</h3>
                        <div className="h-px bg-gray-200" />
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Department:</span> {formData.department}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Year:</span> {formData.year}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Guide:</span> {formData.guideName}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Team Members:</span> {formData.teamMembers}
                          </p>
                        </div>
                        <div className="h-px bg-gray-200" />
                        <p className="text-gray-700 whitespace-pre-wrap">{formData.description}</p>
                      </div>
                    </div>

                    {/* Pricing Plans */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {pricingPlans.map((plan) => (
                        <div
                          key={plan.id}
                          className={`card p-6 cursor-pointer transition-all ${
                            selectedPlan === plan.id ? 'ring-2 ring-indigo-600' : ''
                          }`}
                          onClick={() => setSelectedPlan(plan.id)}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              {plan.icon}
                              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                            </div>
                            <span className="text-2xl font-bold text-indigo-600">{plan.price}</span>
                          </div>
                          <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-600">
                                <div className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => handleDownload(plan.id)}
                            disabled={isProcessingPayment}
                            className="btn btn-primary w-full flex items-center justify-center gap-2 px-8 py-4 text-lg min-w-[200px]"
                          >
                            {isProcessingPayment && selectedPlan === plan.id ? (
                              <>
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Download className="h-5 w-5" />
                                Download Now
                              </>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Generate; 