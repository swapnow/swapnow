# == Schema Information
#
# Table name: courses
#
#  id            :integer          not null, primary key
#  university_id :integer          not null
#  course_name   :string           not null
#  course_number :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class CourseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end