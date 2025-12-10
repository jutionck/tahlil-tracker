
import React from 'react';
import { DeceasedProfile, Gender } from '../types';
import { User, Calendar, Save } from 'lucide-react';

interface ProfileFormProps {
  profile: DeceasedProfile;
  setProfile: (profile: DeceasedProfile) => void;
  onCalculate: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, setProfile, onCalculate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-emerald-100">
      <h2 className="text-xl font-semibold text-emerald-800 mb-6 flex items-center gap-2">
        <User size={22} className="text-emerald-600" />
        Data Almarhum/Almarhumah
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Contoh: H. Fulan bin Fulan"
            className="w-full p-3.5 bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition shadow-sm placeholder-gray-400"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal Wafat</label>
            <div className="relative">
                <input
                type="date"
                name="deathDate"
                value={profile.deathDate}
                onChange={handleChange}
                className="w-full p-3.5 pl-11 bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition shadow-sm"
                required
                />
                <Calendar className="absolute left-3.5 top-3.5 text-emerald-500 pointer-events-none" size={20} />
            </div>
            </div>

            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Jenis Kelamin</label>
            <div className="relative">
                <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full p-3.5 bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition shadow-sm appearance-none"
                >
                    <option value={Gender.MALE}>{Gender.MALE}</option>
                    <option value={Gender.FEMALE}>{Gender.FEMALE}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
            </div>
            </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition duration-200 flex justify-center items-center gap-2 mt-2 shadow-emerald-200 shadow-lg transform active:scale-[0.99]"
        >
          <Save size={20} />
          Simpan & Hitung Hari
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
