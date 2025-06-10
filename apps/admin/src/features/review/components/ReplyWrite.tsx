type ReplyWriteProps = {
    setReplyText: (text: string) => void;
    replyText: string;
    onReplySubmit: () => void;
    onCancel: () => void;
};

export default function ReplyWrite({ setReplyText, replyText, onReplySubmit, onCancel }: ReplyWriteProps) {
    return (
        <div className="mt-4 pt-4 border-t border-amber-200">
            <div className="space-y-3">
                <div>
                    <label htmlFor="reply-text" className="block text-sm font-medium text-amber-800 mb-2">
                        답변 작성
                    </label>
                    <textarea
                        id="reply-text"
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        placeholder="고객에게 답변을 작성해주세요..."
                    />
                </div>
                <div className="flex gap-2 justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={onReplySubmit}
                        disabled={!replyText.trim()}
                        className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        답변 제출
                    </button>
                </div>
            </div>
        </div>
    );
}
