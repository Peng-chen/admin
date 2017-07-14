package com.admin.servlet;

import com.admin.utils.MGameProperty;
import org.apache.commons.lang3.ArrayUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class BodyReaderHttpServletRequestWrapper extends
		HttpServletRequestWrapper {

	Logger userAccessLogger = LoggerFactory
			.getLogger(MGameProperty.USER_ACCESS_LOG_NAMESPACE);

	private byte[] body;

	public void setBody(byte[] body) {
		this.body = body;
	}
	
	public byte[] getBody() {
		return this.body;
	}

	public BodyReaderHttpServletRequestWrapper(HttpServletRequest request)
			throws IOException {
		super(request);
		//body = StreamUtil.readBytes(request.getReader(), this.getCharacterEncoding());
		int size = request.getContentLength();
		if(size > 0) {

			/*BufferedReader br = request.getReader();
			String inputLine;
			String str = "";
			try {
				while ((inputLine = br.readLine()) != null) {
					str += inputLine;
				}
				body = str.getBytes("utf-8");
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				br.close();
			}
			body = str.getBytes("utf-8");*/
			body = getRequestBodyStream(request, size);

			//userAccessLogger.info(new String(body, "utf-8"));
		}
	}

	@Override
	public int getContentLength() {
		if(ArrayUtils.isEmpty(body)) {
			return 0;
		}

		return body.length;
	}

	@Override
	public BufferedReader getReader() throws IOException {
		return new BufferedReader(new InputStreamReader(getInputStream()));
	}

	@Override
	public ServletInputStream getInputStream() throws IOException {
		return new WapperedInputStream();
	}

	private class WapperedInputStream extends ServletInputStream {
		final ByteArrayInputStream inputSteam = new ByteArrayInputStream(body);
		
		@Override
		public int read() throws IOException {
			return inputSteam.read();
		}

		@Override
		public boolean isFinished() {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean isReady() {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public void setReadListener(ReadListener readListener) {
			// TODO Auto-generated method stub
			
		}
	}

	private byte[] getRequestBodyStream(HttpServletRequest request, int size) throws IOException {
		List<Byte> dateList = new ArrayList<Byte>();

		int readBytes = 0;
		while (true) {
			byte[] data = new byte[size];
//			int read = request.getInputStream().read(data);
			int read = request.getInputStream().read(data, 0, size);
			for (int i = 0; i < read; i++) {
				if(data != null) {
					dateList.add(data[i]);
				}
			}
			if(read == -1){
				break;
			}
			readBytes += read;
		}
		byte[] bytes = new byte[dateList.size()];
		for(int i = 0;i < dateList.size(); i++){
			bytes[i] = dateList.get(i).byteValue();
		}
		/*byte[] bytes = new byte[size];
		int length = bytes.length;
		int read = request.getInputStream().read(bytes);*/
		return bytes;
	}
}
