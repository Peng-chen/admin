package com.admin.queue;

//import com.catpaw.eventframe.event.AsyEventEmitter;
//import com.catpaw.eventframe.event.EventEmitter;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * 任务同步队列
 */
public class TaskQueue {

    private static BlockingQueue<Object> queue = new LinkedBlockingQueue<Object>(50000);

//    private static EventEmitter event;
//
//    static {
//        event = new AsyEventEmitter();
//    }
//
//    public static EventEmitter getEvent(){
//        return event;
//    }

    private TaskQueue(){}

    public static void put(Object obj) throws InterruptedException {
        queue.put(obj);
    }

    public static synchronized Object get() throws InterruptedException {
        return queue.poll();
    }

    public static boolean isEmpty() {
        return queue.isEmpty();
    }

    public static int getSize(){
        return queue.size();
    }

}
