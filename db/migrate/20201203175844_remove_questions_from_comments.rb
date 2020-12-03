class RemoveQuestionsFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_reference :comments, :question, null: false, foreign_key: true
  end
end
