json.array! @posts do |post|
  json.extract! post,
                :id,
                :user_id,
                :title,
                :description,
                :price,
                :img_url1,
                :img_url2,
                :img_url3,
                :category_id,
                :course_id,
                :zip_code,
                :created_at,
                :condition
end
