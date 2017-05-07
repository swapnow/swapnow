# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  description :text             not null
#  price       :integer          not null
#  img_url1    :string           not null
#  img_url2    :string           not null
#  category_id :integer          not null
#  course_id   :integer          not null
#  zip_code    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Post, type: :model do
  describe "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:img_url1) }
    it { should validate_presence_of(:img_url2) }
    it { should validate_presence_of(:category) }
    it { should validate_presence_of(:course) }
    it { should validate_presence_of(:zip_code) }
  end

  describe "associations" do
    it { should belong_to(:category) }
    it { should belong_to(:course) }
    it { should belong_to(:user) }
  end
end