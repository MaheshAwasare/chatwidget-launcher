import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

type Step = 'details' | 'plan' | 'payment' | 'success';

interface FormData {
  companyName: string;
  fullName: string;
  email: string;
  website: string;
  plan: 'starter' | 'professional' | 'enterprise';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface ValidationErrors {
  companyName?: string;
  fullName?: string;
  email?: string;
  website?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('details');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    fullName: '',
    email: '',
    website: '',
    plan: 'starter',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear validation error when user starts typing
    if (validationErrors[e.target.name as keyof ValidationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: undefined
      });
    }
  };

  const validateDetailsStep = (): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    if (!formData.companyName.trim()) {
      errors.companyName = 'Company name is required';
      isValid = false;
    }

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.website.trim()) {
      errors.website = 'Website is required';
      isValid = false;
    } else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.website)) {
      errors.website = 'Please enter a valid website URL';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const validatePaymentStep = (): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    if (!formData.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
      isValid = false;
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      errors.cardNumber = 'Please enter a valid 16-digit card number';
      isValid = false;
    }

    if (!formData.expiryDate.trim()) {
      errors.expiryDate = 'Expiry date is required';
      isValid = false;
    } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expiryDate)) {
      errors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
      isValid = false;
    }

    if (!formData.cvv.trim()) {
      errors.cvv = 'CVV is required';
      isValid = false;
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      errors.cvv = 'Please enter a valid CVV';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleNextStep = () => {
    if (currentStep === 'details' && validateDetailsStep()) {
      setCurrentStep('plan');
    } else if (currentStep === 'plan') {
      setCurrentStep('payment');
    }
  };

  const handleSubmit = async () => {
    if (!validatePaymentStep()) {
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/onboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Onboarding failed. Please try again.');
      }

      setCurrentStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'details':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                  validationErrors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {validationErrors.companyName && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.companyName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                  validationErrors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {validationErrors.fullName && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.fullName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                  validationErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                  validationErrors.website ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {validationErrors.website && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.website}</p>
              )}
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-cyan-500 transition flex items-center justify-center"
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        );

      case 'plan':
        return (
          <div className="space-y-6">
            <div className="grid gap-6">
              <label className="relative flex p-4 border rounded-lg cursor-pointer hover:border-cyan-500">
                <input
                  type="radio"
                  name="plan"
                  value="starter"
                  checked={formData.plan === 'starter'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className="w-6 h-6 border rounded-full mr-3 flex items-center justify-center">
                    {formData.plan === 'starter' && <div className="w-3 h-3 bg-cyan-500 rounded-full" />}
                  </div>
                  <div>
                    <h3 className="font-semibold">Starter</h3>
                    <p className="text-gray-500">₹199/month</p>
                  </div>
                </div>
              </label>
              
              <label className="relative flex p-4 border rounded-lg cursor-pointer hover:border-cyan-500">
                <input
                  type="radio"
                  name="plan"
                  value="professional"
                  checked={formData.plan === 'professional'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className="w-6 h-6 border rounded-full mr-3 flex items-center justify-center">
                    {formData.plan === 'professional' && <div className="w-3 h-3 bg-cyan-500 rounded-full" />}
                  </div>
                  <div>
                    <h3 className="font-semibold">Professional</h3>
                    <p className="text-gray-500">₹770/month</p>
                  </div>
                </div>
              </label>

              <label className="relative flex p-4 border rounded-lg cursor-pointer hover:border-cyan-500">
                <input
                  type="radio"
                  name="plan"
                  value="enterprise"
                  checked={formData.plan === 'enterprise'}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className="w-6 h-6 border rounded-full mr-3 flex items-center justify-center">
                    {formData.plan === 'enterprise' && <div className="w-3 h-3 bg-cyan-500 rounded-full" />}
                  </div>
                  <div>
                    <h3 className="font-semibold">Enterprise</h3>
                    <p className="text-gray-500">₹999/month</p>
                  </div>
                </div>
              </label>
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-cyan-500 transition flex items-center justify-center"
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="4242 4242 4242 4242"
                className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                  validationErrors.cardNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {validationErrors.cardNumber && (
                <p className="mt-1 text-sm text-red-500">{validationErrors.cardNumber}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                    validationErrors.expiryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {validationErrors.expiryDate && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.expiryDate}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-cyan-500 focus:border-cyan-500 ${
                    validationErrors.cvv ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {validationErrors.cvv && (
                  <p className="mt-1 text-sm text-red-500">{validationErrors.cvv}</p>
                )}
              </div>
            </div>
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                {error}
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-6 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-cyan-500 transition flex items-center justify-center disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Complete Setup'}
            </button>
          </div>
        );

      case 'success':
        return (
          <div className="text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Welcome to JAICA-LINK!</h2>
            <p className="text-gray-600 mb-8">
              Your account has been successfully created. Check your email for next steps.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-8 py-3 rounded-md font-semibold hover:from-cyan-600 hover:to-cyan-500 transition"
            >
              Go to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {currentStep !== 'success' && (
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentStep === 'details' && 'Tell us about yourself'}
                  {currentStep === 'plan' && 'Choose your plan'}
                  {currentStep === 'payment' && 'Payment details'}
                </h1>
                <p className="text-gray-600">
                  {currentStep === 'details' && 'We need some information to set up your account'}
                  {currentStep === 'plan' && 'Select the plan that works best for you'}
                  {currentStep === 'payment' && 'Enter your payment information to complete setup'}
                </p>
              </div>
            )}
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;